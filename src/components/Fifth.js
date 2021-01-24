import React, { useEffect } from 'react'


export default function Fifth() {

  useEffect(() => new window.TradingView.widget(
    {
      "width": '100%',
      "height": 610,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_ea142"
    }));


  return (
    <div>


      <div class="tradingview-widget-container">
        <div id="tradingview_ea142"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>


      </div>


    </div>
  )
}
