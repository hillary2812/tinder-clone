import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen(){

    const [messages, setMessages] = useState ([
        {
            name:'Kiddu',
            image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9DvoAyunjS7d8ruXU3u3o8vHwvuncnuHP3/Pm95c9JwITX7+LP7Nz6/fxdxY94zaCe2rmw4Mbh8+nE6NRUw4rf8ujt+PKr3sJ0zJ2E0aiY2LW348qO1K7y+vZoyJaAz6Sj3L0Utm3QTF7nAAAFkElEQVR4nO2dCVrrMAyEmzSxu6d0oaVQtvsf8qUUSnh08TKOJnz6T+CJHVmSZbnXUxRFURRFURRFURRFURRFURRFUZQOsllO+tP+/XIoPZAELEf7l6yw1ua5tUVRrl+30z+kc7UzRW5M1sSUeVFtl9JDQzDZFfanuIbKYv00kx5gJKuquCDvkzx/fJYeZAT99aXpa1AWd9LjDGU4H9zW96HRrKTHGsQqd9N3oJh38HfcF876akx2Lz1gT2ZV6SOwZjCSHrMXz2P3FXqSuJUetQfDzF9g/TN2R+IsYAY/ZnEhPXJXqjCBtcSp9NDd2OeBArPMbqQH78JqECwwM2vp0TswDJ/BmvxRevy3mYf+hEcG9AHV1MuV+Y2ppBXcYh0nsN4Vyb3wlY1VmI2lNVwnegrrHYN6EvuRf+EB7j8x0pAeKYgDqSFgCuuQn3hPfIra7U8YaR2XeUAs0trWTKSFXGIGWaT1MqVNvk0xizTLaK3pnW9u5hIF65HGC+Y3rCOMvrSUC8R7bJ+UpBmbDcjQ1NvFTlrLefooQ0PruI1gCjMrreU8byhTWkf6nMcYe5QprbcLzpzbK06h5QwvQF7pAdINEbbh1wo5k9/ByfzfWFUow99XiPwPOS0NJA11hDTK3/35HR8WANcKOeukFkC/VFrLeaawCDgjPShdwhSaB2kt55lFHG//hDbrjRKY5az1UbANkTR46vW2KGNKmsTo9fogU8OaiAKeW7AaGlh0QRr/HgD5bZYz03ZgAvkRzYu0jitA5rBkLsKEBFADztDpCOSMlNTt/gTwI1IvUkhmnzT6/eI+etNnjZxORBe2kSYSv4kuGiIvTexFb4nkduZApOdGGzh9E1e9x1sO1eAxZhIta61Qk+eISezEFEZNYskbNzWZBSvM+Q3pkeA9kX8v/GId5p0WnKeG57gPyn6bufS4PdiH/Ip5F3aKEwEC2a8D/cfEe52WXVqjB+687an0iL3xrMxgvihzgaGfwCfp8Qaw9PgVc9Ky5xu4X3kumbPc11g4RhmduMF9Hse66HE3IoqzONnT8k16mBE8ukikPbV3wamIqJQeZQwuGQ3q48LbOPhuZi89yCjGDouU9BqXIy4Ku+iwfeOwSrutcOlgabq9Sl2KalkvG7rhdpooPcoI3G4k2u4kEf9n41a3wFuod4uNk76sG82hzrFyz0XZDro1w1HlU1pTZlvmQqjfTF6tR/PSo8bBC2tx929G6xu9g89jcrunb2V2YGHCK7/MoKJP7S9MXD1N/XmoT0lHGaA2MS/fWDNTkzWoVr+0lLmp5zms8ceh/zXfWt069Cb3IR9z2ZwlaoE2KCqivePOsfm6H2bA4swt17i2LT8haUe/SDKBnxC0o5894P/AJqYUnsaJSTiBRwrRPM4CdjH2CuVYLrLaATf5axRCgZX/+wfhEkX2jU3Q8wCB5FX7NhVzE88Z0/rPGNu3219i2e5RcUzz/FAGbWaORwICW30cQkZgixIllmirEqdiAuuNsY32SvFXDGNo4RWTTapg0BGTvBo88B0gnMLUZ3HA9o+BlGmjKf/ybTw2ZfFGX9CMfpPwLZrwO1tQElbcyv+ER5Idi49Ed8ImidZp3FtVUBKtU2An5GiS2FP/q0wpSfGOSeC1yUQkKH8HvFUFBd9MyqEWtlXgkwh8FgAEusSfbQrh7SNbTx7eBhxGsfhrTQqkYxPT6yIZ0CYasL6dUJAtGIAN5YEAl+mGymE7AbzHAHoTDw3wThiwYz6UAqaQzCU9AbvE73K3RwSYW+NRdd8usIbDwEcPsMB6LDKlL36C2vMraSEXQUVQtFOIamA3YzU0sNdaMO8YJwHkmVKGTkcsSOF7zso7xqmZTfusTDvVAE1RFEVRFEVRFEVRFEVRFEVRFEXpOv8Ac0NXXB8rMXUAAAAASUVORK5CYII=',
            message: 'Whats up!'
        },
        {
            name:'Kidda;)',
            image:'data:image/png;base64,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',
            message: 'hows going?'
        },
        {
            message: 'Whats up!'
        },


    ])
    return(
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You Matche with this guy on 23/05/2020</p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen_message">
                    <Avatar
                    className="chatScreen_image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen_message">
                       <p className="chatScreen_textUser">{message.message}</p> 
                    </div>
                )
            ))}
        </div>
    );
}

export default ChatScreen;