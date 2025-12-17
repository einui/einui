import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import {
  LiveScoreWidget,
  CricketScoreWidget,
  BasketballScoreWidget,
  UpcomingMatchWidget,
  StandingsWidget,
} from "@/components/liquid-glass/widgets"

export const metadata: Metadata = {
  title: "Sports Widgets",
  description: "Sports widgets for live scores, match schedules, and standings with liquid glass styling.",
}

const liveScoreCode = `<LiveScoreWidget
  isLive
  homeTeam={{ name: "Arsenal", shortName: "ARS", score: 2 }}
  awayTeam={{ name: "Chelsea", shortName: "CHE", score: 1 }}
  matchTime="67'"
  competition="Premier League"
/>`

const cricketCode = `<CricketScoreWidget
  matchType="ODI 2"
  team1={{ name: "IND", flag: "🇮🇳", score: "387/3", overs: "49" }}
  team2={{ name: "AUS", flag: "🇦🇺", score: "200/6", overs: "30" }}
  summary="AUS needs 187 from 120"
  isLive
/>`

const basketballCode = `<BasketballScoreWidget
  isLive
  homeTeam={{ name: "Lakers", shortName: "LAL", score: 98 }}
  awayTeam={{ name: "Warriors", shortName: "GSW", score: 102 }}
  quarter="Q4"
  timeLeft="2:34"
  competition="NBA"
/>`

const upcomingCode = `<UpcomingMatchWidget
  homeTeam={{ name: "Manchester United", shortName: "MUN" }}
  awayTeam={{ name: "Liverpool", shortName: "LIV" }}
  date="Sunday, Dec 22"
  time="16:30"
  competition="Premier League"
  venue="Old Trafford"
/>`

const standingsCode = `<StandingsWidget
  title="Premier League"
  teams={[
    { position: 1, name: "Liverpool", shortName: "LIV", played: 17, won: 13, drawn: 3, lost: 1, points: 42 },
    { position: 2, name: "Arsenal", shortName: "ARS", played: 17, won: 10, drawn: 5, lost: 2, points: 35 },
    { position: 3, name: "Chelsea", shortName: "CHE", played: 17, won: 9, drawn: 5, lost: 3, points: 32 },
    { position: 4, name: "Man City", shortName: "MCI", played: 17, won: 9, drawn: 4, lost: 4, points: 31 },
  ]}
/>`

export default function SportsWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Sports Widgets"
        description="Widgets for displaying live scores, match schedules, and league standings."
      />

      <CLIInstall componentName="widgets/sports-widget" />

      <ComponentPreview
        title="Live Score Widget"
        description="Football/Soccer live score display with team logos and match time."
        preview={
          <div className="flex flex-wrap gap-6">
            <LiveScoreWidget
              isLive
              homeTeam={{ name: "Arsenal", shortName: "ARS", score: 2 }}
              awayTeam={{ name: "Chelsea", shortName: "CHE", score: 1 }}
              matchTime="67'"
              competition="Premier League"
            />
            <LiveScoreWidget
              isLive
              homeTeam={{ name: "Barcelona", shortName: "BAR", score: 3 }}
              awayTeam={{ name: "Real Madrid", shortName: "RMA", score: 3 }}
              matchTime="90+2'"
              competition="La Liga"
            />
          </div>
        }
        code={liveScoreCode}
      />

      <ComponentPreview
        title="Cricket Score Widget"
        description="Cricket match scores with innings details and match summary."
        preview={
          <div className="flex flex-wrap gap-6">
            <CricketScoreWidget
              matchType="ODI 2"
              team1={{ name: "IND", flag: "🇮🇳", score: "387/3", overs: "49" }}
              team2={{ name: "AUS", flag: "🇦🇺", score: "200/6", overs: "30" }}
              summary="AUS needs 187 from 120"
              isLive
            />
            <CricketScoreWidget
              matchType="T20 World Cup"
              team1={{ name: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "186/4", overs: "20" }}
              team2={{ name: "PAK", flag: "🇵🇰", score: "142/8", overs: "18.3" }}
              summary="ENG won by 44 runs"
              isLive={false}
            />
          </div>
        }
        code={cricketCode}
      />

      <ComponentPreview
        title="Basketball Score Widget"
        description="Basketball game scores with quarter and time remaining."
        preview={
          <div className="flex flex-wrap gap-6">
            <BasketballScoreWidget
              isLive
              homeTeam={{ name: "Lakers", shortName: "LAL", score: 98 }}
              awayTeam={{ name: "Warriors", shortName: "GSW", score: 102 }}
              quarter="Q4"
              timeLeft="2:34"
              competition="NBA"
            />
            <BasketballScoreWidget
              isLive
              homeTeam={{ name: "Celtics", shortName: "BOS", score: 112 }}
              awayTeam={{ name: "Heat", shortName: "MIA", score: 108 }}
              quarter="Q4"
              timeLeft="0:45"
              competition="NBA"
            />
          </div>
        }
        code={basketballCode}
      />

      <ComponentPreview
        title="Upcoming Match Widget"
        description="Display upcoming fixtures with date, time, and venue information."
        preview={
          <div className="flex flex-wrap gap-6">
            <UpcomingMatchWidget
              homeTeam={{ name: "Manchester United", shortName: "MUN" }}
              awayTeam={{ name: "Liverpool", shortName: "LIV" }}
              date="Sunday, Dec 22"
              time="16:30"
              competition="Premier League"
              venue="Old Trafford"
            />
            <UpcomingMatchWidget
              homeTeam={{ name: "Bayern Munich", shortName: "BAY" }}
              awayTeam={{ name: "Dortmund", shortName: "BVB" }}
              date="Saturday, Dec 21"
              time="18:30"
              competition="Bundesliga"
            />
          </div>
        }
        code={upcomingCode}
      />

      <ComponentPreview
        title="Standings Widget"
        description="League table with team statistics and positions."
        preview={
          <StandingsWidget
            title="Premier League"
            teams={[
              { position: 1, name: "Liverpool", shortName: "LIV", played: 17, won: 13, drawn: 3, lost: 1, points: 42 },
              { position: 2, name: "Arsenal", shortName: "ARS", played: 17, won: 10, drawn: 5, lost: 2, points: 35 },
              { position: 3, name: "Chelsea", shortName: "CHE", played: 17, won: 9, drawn: 5, lost: 3, points: 32 },
              { position: 4, name: "Man City", shortName: "MCI", played: 17, won: 9, drawn: 4, lost: 4, points: 31 },
              {
                position: 5,
                name: "Nottm Forest",
                shortName: "NFO",
                played: 17,
                won: 8,
                drawn: 5,
                lost: 4,
                points: 29,
              },
            ]}
          />
        }
        code={standingsCode}
      />
    </div>
  )
}
