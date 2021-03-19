import {LineChart, Legend, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";


export const Graphic = ({data, XAxisName, YAxisName}) => {
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <LineChart data={data}>
                <XAxis dataKey={XAxisName} />
                <YAxis />
                <Tooltip isAnimationActive={false} />
                <Legend />
                <Line type="monotone" dataKey={YAxisName} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}