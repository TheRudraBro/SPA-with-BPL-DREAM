import React, { use } from 'react';

const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise)
    console.log(playerData);
    return (
        <div>
            AVAILABLE
        </div>
    );
};

export default AvailablePlayers;