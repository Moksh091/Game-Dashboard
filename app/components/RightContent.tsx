"use client"
import { ArrowRight } from "lucide-react"
import { Games } from "./Games"
import { Header } from "./Header"
import { Chart, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"

export const RightContent = () => {
    Chart.register(ArcElement)
    const element = {
        labels: [
            'Red',
            'Blue',
            'White'
        ],
        datasets: [{
            label: 'my first',
            data: [2340, 5420, 4580],
            backgroundColor: ['rgb(192,60,60)',
                'rgb(125,99,215)',
                'rgb(255,255,255)'
            ],
            borderWidth: 0,
        }]
    }

    const plugins = [{
        id: '',
        beforeDraw: function (chart: Chart) {
            const{ width, height, ctx} = chart;
            ctx.restore();
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';

            // Font size based on chart width
            ctx.font = '14px Arial';
            ctx.fillStyle = '#bd5b65';
            ctx.fillText('Total hours' , width/2,height/2 -20);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('12,340h', width/2, height/2 + 10);

            ctx.save();
        }
    }];

    const options = {
        cutout: '60%',
        maintainAspectRatio: false,
        responsive: true,

    }
    return <div className="">
        <div className="h-fit max-h-[280px] space-y-4 ">
            <Games src="/ravel.jpg" alt="Unravel2" label="Unravel 2 (Standard Edition + Starter Pass)" />
            <Games src="/sbway.jpg" alt="Subway Surf" label="Subway Surf" />
            <Games src="/reddead.jpg" alt="Read Dead " label="Red Dead Redemption 3 (Premium Pack)" />
        </div>
        <div className="mt-8 mb-4 ">
            <Header label="Your Statistic" label2={<ArrowRight color="white" />} />
        </div>
        <div className="h-[450px] w-full relative moksh rounded-[2rem]">
            <div className=" flex justify-center pt-16">
                <Doughnut data={element} width={'400px'} height={'200px'} options={options} plugins={plugins}
                />
            </div>
        </div>
    </div>
}