import { cn } from "~/lib/utils";
import { ScoreNumericBadge } from "./ScoreBadge";

export function CategoryHeader({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) {
  return (
    <div className="flex flex-row gap-4 items-center py-2">
      <p className="text-xl sm:text-2xl font-semibold">{title}</p>
      <ScoreNumericBadge score={categoryScore} />
    </div>
  );
}

export function CategoryContent({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
              }
              alt="score"
              className="size-5 mr-2"
            />
            <p className="text-base sm:text-xl text-gray-500 ">{tip.tip}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => (
          <div
            key={index + tip.tip}
            className={cn(
              "flex flex-col gap-2 rounded-2xl p-4",
              tip.type === "good"
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-yellow-50 border border-yellow-200 text-yellow-700"
            )}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src={
                  tip.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt="score"
                className="size-5"
              />
              <p className="text-base sm:text-xl font-semibold">{tip.tip}</p>
            </div>
            <p className="text-sm sm:text-base ">{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
