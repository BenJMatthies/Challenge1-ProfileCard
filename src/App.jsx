export default function App() {
  return <div className="card">
    <Avatar />
    <div className="data">
    <Intro/>
    <SkillList/>
    </div>
  </div>
}

function Avatar() {
  return <img className="avatar" src="./src/assets/Lion.png" alt="Leonidas Gavran" />
}

function Intro() {
  return <>
  <h1>Leonidas A. Gavran</h1>
  <h4>Indy game developer and SFF writer.</h4>
  <p>Things I love: <br/>Building worlds and telling stories full of quirky, irreverant humor, and devouring the stories of others in all forms: books, movies and TV, and I particularly love animation as art, and video games! <br/>Spending time in nature, particularly camping and backpacking. <br/>Hanging out with cute girls😘 </p>
  </>
}

function SkillList(){
  return <div className="skill-list">
    <Skill skillName="Godot" emoji="😁" backgroundColor="green" />
    <Skill skillName="C#" emoji="💪" backgroundColor="red" />
    <Skill skillName="Java" emoji="💪" backgroundColor="purple" />
    <Skill skillName="React" emoji="👌" backgroundColor="yellow" />
    <Skill skillName="Javascript" emoji="👌" backgroundColor="blue" />
  </div>
}

function Skill({skillName, emoji, backgroundColor}){
  return(
  <div className="skill" style={{backgroundColor: backgroundColor}}>
    <span>{skillName}</span>
    <span>{emoji}</span>
  </div>)
}