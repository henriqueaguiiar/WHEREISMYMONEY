import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());


server.get('/coin/:coin', async (request: Request, response: Response) => {
  const coin = request.params.coin;
  try {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
    const result = await axios.get(apiUrl);

    const coinData = result.data[coin];
    
    if (coinData) {
      response.json({
        coinName: coin,
        coinPrice: coinData.usd.toFixed(2),
      });
    } else {
      response.status(404).json({ error: 'Moeda não encontrada.' });
    }
  } catch (error) {
    response.status(500).json({ error: 'Erro ao buscar os dados da moeda' });
  }
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
