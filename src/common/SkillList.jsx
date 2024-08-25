
function SkillList({src, skill}) {
  return (
    <div>
        <span>
            <img src={src} alt={`Checkmark img`} />
            <p>{skill}</p>
        </span>
    </div>
  )
}

export default SkillList;