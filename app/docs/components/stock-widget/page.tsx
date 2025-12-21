import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { StockTickerWidget, CompactStockWidget, PortfolioWidget, MarketOverviewWidget, CryptoWidget } from "@/registry/widgets/stock-widget"

export const metadata: Metadata = {
  title: "Stocks Widgets",
  description: "Financial widgets for stock prices, portfolios, market overview, and cryptocurrency.",
}

const stockTickerCode = `<StockTickerWidget
  symbol="AAPL"
  name="Apple Inc"
  price={198.50}
  change={3.25}
  changePercent={1.67}
  chartData={[185, 188, 192, 190, 195, 193, 198]}
/>`

const compactCode = `<CompactStockWidget
  symbol="NVDA"
  price={134.85}
  change={5.23}
  changePercent={4.03}
/>`

const portfolioCode = `<PortfolioWidget
  totalValue={125420}
  totalChange={2.34}
  holdings={[
    { symbol: "AAPL", name: "Apple", shares: 50, avgCost: 175, currentPrice: 198.50 },
    { symbol: "MSFT", name: "Microsoft", shares: 30, avgCost: 380, currentPrice: 425.20 },
    { symbol: "GOOGL", name: "Alphabet", shares: 20, avgCost: 140, currentPrice: 175.80 },
  ]}
/>`

const marketCode = `<MarketOverviewWidget
  indices={[
    { name: "S&P 500", value: 6051.25, change: 22.4, changePercent: 0.37 },
    { name: "NASDAQ", value: 19926.72, change: -45.3, changePercent: -0.23 },
    { name: "DOW", value: 43828.06, change: 86.25, changePercent: 0.20 },
  ]}
/>`

const cryptoCode = `<CryptoWidget
  symbol="BTC"
  name="Bitcoin"
  price={104250}
  change24h={2.45}
  marketCap="$2.05T"
  volume24h="$48.2B"
  sparkline={[100000, 101500, 102800, 101200, 103500, 104250]}
/>`

export default function StocksWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Stocks Widgets"
        description="Financial widgets for tracking stocks, portfolios, market indices, and cryptocurrency."
      />

      <CLIInstall componentName="stock-widget" />

      <ComponentPreview
        title="Stock Ticker Widget"
        description="Detailed stock display with price chart, change, and company name."
        preview={
          <div className="flex flex-wrap gap-6">
            <StockTickerWidget
              symbol="AAPL"
              name="Apple Inc"
              price={198.5}
              change={3.25}
              changePercent={1.67}
              chartData={[185, 188, 192, 190, 195, 193, 198]}
            />
            <StockTickerWidget
              symbol="META"
              name="Meta Platforms"
              price={612.77}
              change={-8.42}
              changePercent={-1.35}
              chartData={[625, 620, 618, 622, 615, 610, 612]}
            />
          </div>
        }
        code={stockTickerCode}
      />

      <ComponentPreview
        title="Compact Stock Widget"
        description="Minimal stock ticker for quick price checks."
        preview={
          <div className="flex flex-wrap gap-4">
            <CompactStockWidget symbol="NVDA" price={134.85} change={5.23} changePercent={4.03} />
            <CompactStockWidget symbol="TSLA" price={436.23} change={-12.45} changePercent={-2.77} />
            <CompactStockWidget symbol="AMZN" price={227.05} change={1.82} changePercent={0.81} />
          </div>
        }
        code={compactCode}
      />

      <ComponentPreview
        title="Portfolio Widget"
        description="Portfolio overview with holdings and total value."
        preview={
          <div className="flex flex-wrap gap-6">
            <PortfolioWidget
              totalValue={125420}
              totalChange={2.34}
              holdings={[
                { symbol: "AAPL", name: "Apple", shares: 50, avgCost: 175, currentPrice: 198.5 },
                { symbol: "MSFT", name: "Microsoft", shares: 30, avgCost: 380, currentPrice: 425.2 },
                { symbol: "GOOGL", name: "Alphabet", shares: 20, avgCost: 140, currentPrice: 175.8 },
              ]}
            />
            <PortfolioWidget
              title="Watchlist"
              totalValue={45200}
              totalChange={-0.85}
              holdings={[
                { symbol: "AMD", name: "AMD", shares: 100, avgCost: 125, currentPrice: 122.5 },
                { symbol: "CRM", name: "Salesforce", shares: 25, avgCost: 280, currentPrice: 342.8 },
              ]}
            />
          </div>
        }
        code={portfolioCode}
      />

      <ComponentPreview
        title="Market Overview Widget"
        description="Major market indices at a glance."
        preview={
          <div className="flex flex-wrap gap-6">
            <MarketOverviewWidget
              indices={[
                { name: "S&P 500", value: 6051.25, change: 22.4, changePercent: 0.37 },
                { name: "NASDAQ", value: 19926.72, change: -45.3, changePercent: -0.23 },
                { name: "DOW", value: 43828.06, change: 86.25, changePercent: 0.2 },
              ]}
            />
            <MarketOverviewWidget
              indices={[
                { name: "FTSE 100", value: 8262.05, change: 15.8, changePercent: 0.19 },
                { name: "DAX", value: 20242.57, change: -32.1, changePercent: -0.16 },
              ]}
            />
          </div>
        }
        code={marketCode}
      />

      <ComponentPreview
        title="Crypto Widget"
        description="Cryptocurrency price display with market data and sparkline."
        preview={
          <div className="flex flex-wrap gap-6">
            <CryptoWidget
              symbol="BTC"
              name="Bitcoin"
              price={104250}
              change24h={2.45}
              marketCap="$2.05T"
              volume24h="$48.2B"
              sparkline={[100000, 101500, 102800, 101200, 103500, 104250]}
            />
            <CryptoWidget
              symbol="ETH"
              name="Ethereum"
              price={3920}
              change24h={-1.23}
              marketCap="$471B"
              volume24h="$18.5B"
              sparkline={[4000, 3980, 3950, 3960, 3940, 3920]}
            />
          </div>
        }
        code={cryptoCode}
      />
    </div>
  )
}
