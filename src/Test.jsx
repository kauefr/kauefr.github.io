import { Link } from "react-router-dom";

export default function Test() {
    return <>
        <div className='tile is-ancestor'>
            <div className='tile is-parent'>
                <div className='tile notification is-primary'>Primary</div>
            </div>
            <div className='tile is-parent'>
                <div className='tile notification is-danger'>Danger</div>
            </div>
        </div>
    </>;
}