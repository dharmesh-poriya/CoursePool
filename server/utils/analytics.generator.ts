import { Document, Model, model } from "mongoose";

interface MonthData {
  month: string;
  count: number;
}

export async function generateLast12Monthsdata<T extends Document>(
  model: Model<T>
): Promise<{ last12Months: MonthData[] }> {
  const last12Months: monthData[] = [];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 11; i >= 0; i--) {
    const endData = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - i * 28
    );

    const startDate = new Date(
      endData.getFullYear(),
      endData.getMonth(),
      endData.getDate() - 28
    );

    const monthYear = endData.toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const count = await model.countDocuments({
      createdAt: {
        $gte: startDate,
        $lt: endData,
      },
    });
    last12Months.push({ month: monthYear, count });
  }
  return { last12Months };
}
