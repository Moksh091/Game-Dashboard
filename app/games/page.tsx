"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import { gamepad } from "../data/data";
import GamesCard from "../cards/Gamescard";

export const Games = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    return <div className="my-8">
        <div className="grid grid-cols-3 gap-8">
            {gamepad.map((game, index) => (
                <GamesCard src={game.src} label={game.name} alt={game.alt} key={index} />

            ))}
        </div>
    </div>
}

export default Games;