import {LineChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";


export const Graphic = ({data, XAxisName, YAxisName}) => {
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={XAxisName} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={YAxisName} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}