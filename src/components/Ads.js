
import TextStyles from '../TextStyles.css';
function Ad(props) {
    return (
        <div className = 'advertisement'>
            <img src = {props.img} alt="adpic" width={props.width} height={props.height} align-self='right'/>
        </div>
    )
}

export default Ad;