import './styles.scss';
// Routing
import { Link } from 'react-router-dom';
// Mock
import { LEARNMORE } from '../../../../mock';

function LearnMore() {
    const topics = [...LEARNMORE];
    return (
        <div className='learnMore'>
            {topics.map((topic, i) => (
                <div key={i} className='learnMore__section'>
                    <h3 className='learnMore__header'>`What is {topic.title}?</h3>
                    <p className='learnMore__description'>{topic.text}</p>
                    <Link to='/services'>
                        <button>{topic.btnText}</button>
                    </Link>
                </div>
            ))}

            {/* <Link to='/courses'>
                <button id='learnMore__btn'>Learn More</button>
            </Link> */}
        </div>
    )
}

export default LearnMore;