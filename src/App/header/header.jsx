import MiddleList from "./middleList/middleList"
import style from "./header.module.css"
import logo from "../../images/logo.svg"
import iPhone from "../../images/iPhone.svg"
import chat from "../../images/Chat.svg"

export default function Header(){
    return(
        <>
            <nav>
                <ul>
                    <li className={style.logo}>
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                    </li>

                    <li className={style.middleList}>
                        <MiddleList></MiddleList>
                    </li>

                    <li className={style.joinAndTalk}>
                        <div className={style.callUs}>
                            <img src={iPhone} alt="phone" />
                            <div>
                                <p>Call us</p>
                                <a href="tel:4055550128">(405)555-0128</a>
                            </div>
                        </div>
                        <div className={style.talkToUs}>
                            <img src={chat} alt="chat" />
                            <div>
                                <p>Talk to us</p>
                                <p>
                                    hello@createx.com
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}