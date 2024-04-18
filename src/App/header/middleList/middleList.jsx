import style from "./middleList.module.css"

export default function MiddleList(){
    return(
        <>
            <ul className={style.middleUl}>
                <li>
                    <a href="">
                        About Us
                    </a>
                </li>

                <li>
                    <a href="">
                        Services
                    </a>
                </li>

                <li>
                    <a href="">
                        Work
                    </a>
                </li>

                <li>
                    <a href="">
                        News
                    </a>
                </li>

                <li>
                    <a href="">
                        Contacts
                    </a>
                </li>
            </ul>
        </>
    )
}