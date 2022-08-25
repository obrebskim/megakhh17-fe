export default function SetMonthNumeral(num: number): string {
  if (num === 0) return "miesięcy";
  if (num === 1) return "miesiąc";
  if (num < 5) return "miesiące";
  return "miesięcy";
}
