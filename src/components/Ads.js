
import TextStyles from '../TextStyles.css';
function Ad(props) {
    return (
        <div className = 'advertisement'>
            <img src = {props.img} alt="adpic" width='220' height='440' align-self='right'/>
        </div>
    )
}

export default Ad;