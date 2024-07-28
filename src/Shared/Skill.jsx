
import { Link } from 'react-router-dom';

const Skill = () => {
    const skills = ['HTML','CSS','JavaScript','React','NodeJS','MongoDB']
    return (
        <div className='my-10'>
            <div className="info w-2/3 mx-auto">
            <h1 className='text-yellow-300 font-bold font-nova text-5xl text-center py-5'>What I Do</h1>
            <p className='text-lg font-semibold text-center'> Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? 
Check out my <Link className='text-blue-400 border-b-2 border-blue-400 ' to={'/project'}>projects.</Link></p>
            </div>
            <div className='flex justify-around mt-10'>
{
    skills.map(skill=><><div className='w-32  border-2 border-red-600 text-center text-2xl   h-10 bg-violet-500 font-bold text-black'>{skill}</div></>)
}
            </div>
        </div>
    );
};

export default Skill;