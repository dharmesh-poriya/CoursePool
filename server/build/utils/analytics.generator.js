"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLast12Monthsdata = void 0;
async function generateLast12Monthsdata(model) {
    const last12Months = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    for (let i = 11; i >= 0; i--) {
        const endData = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i * 28);
        const startDate = new Date(endData.getFullYear(), endData.getMonth(), endData.getDate() - 28);
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
exports.generateLast12Monthsdata = generateLast12Monthsdata;
