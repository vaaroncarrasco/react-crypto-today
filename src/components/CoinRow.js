import React from 'react'

export const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img className="me-4" src={coin.image} alt={coin.name} style={{minWidth: '1rem', maxWidth: '1.5rem'}}/>
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td
        className={ coin.price_change_percentage_24h < 0 ? 'text-danger' : 'text-success' }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

export default CoinRow;