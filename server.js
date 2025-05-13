import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import querystring from 'querystring';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://proxy.duegate.com/staging';
const AUTH_CREDENTIALS = {
  username: 'a.miladinov@radioactive.bg',
  password: '0:y5g5NBv)$zy0<',
};

const getAuthToken = async () => {
  try {
    const data = querystring.stringify({
      grant_type: 'password',
      username: AUTH_CREDENTIALS.username,
      password: AUTH_CREDENTIALS.password,
    });

    const response = await axios.post(`${BASE_URL}/oauth/token`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { token_type, access_token } = response.data;
    if (!access_token) {
      throw new Error('No access token received');
    }

    return `${token_type} ${access_token}`;
  } catch (error) {
    console.error('Authentication error:', error.response?.data || error.message);
    throw new Error('Failed to authenticate');
  }
};

const redeemCard = async (payload) => {
  try {
    const accessToken = await getAuthToken();

    const response = await axios.post(
      `${BASE_URL}/distributor-crm/v1/wallets/1/credit`,
      {
        type: 'redeem_card',
        data: {
          number: payload.cardSerialNumber,
          cvv: payload.cvv,
        },
      },
      {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      success: true,
      message: 'Card redeemed successfully',
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to redeem card',
    };
  }
};

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/webhooks/zoho-forms', async (req, res) => {
  try {
    const { tiktokUsername, gameName, cardSerialNumber, cvv } = req.body;
    console.log('Received webhook request:', { tiktokUsername, gameName, cardSerialNumber });

    const result = await redeemCard({ cardSerialNumber, cvv });
    res.json(result);
  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`⚡️ Server listening on port ${PORT}`);
});