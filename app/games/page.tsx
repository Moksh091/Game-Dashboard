
import { gamepad } from "../data/data";
import GamesCard from "../cards/Gamescard";

const Games = () => {
    return <div className="my-8 ">
        <div className="grid grid-cols-3 gap-8">
            {gamepad.map((game) => (
                <GamesCard src={game.src} label={game.name} alt={game.alt} key={game.id} />

            ))}
        </div>
    </div>
}

export default Games;