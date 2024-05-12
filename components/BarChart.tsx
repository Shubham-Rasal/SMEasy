"use client"
import { ResponsiveBar } from "@nivo/bar";

export default function BarChart(props: any) {
    return (
      <div {...props}>
        <ResponsiveBar
          data={[
            { name: "Jan", count: 11 },
            { name: "Feb", count: 5 },
            { name: "Mar", count: 19 },
            { name: "Apr", count: 10 },
            { name: "May", count: 9 },
            { name: "Jun", count: 7 },
          ]}
          keys={["count"]}
          indexBy="name"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.3}
          colors={["#2563eb"]}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 4,
            tickPadding: 16,
          }}
          gridYValues={4}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          tooltipLabel={({ id }) => `${id}`}
          enableLabel={false}
          role="application"
          ariaLabel="A bar chart showing data"
        />
      </div>
    );
  }
  