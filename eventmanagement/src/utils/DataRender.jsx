export const generateDataOptions = (dataArray) => {
    return dataArray.map((data) => (
        <option key={data} value={data}>
            {data}
        </option>
    ));
};

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const years = [2024, 2025, 2026];