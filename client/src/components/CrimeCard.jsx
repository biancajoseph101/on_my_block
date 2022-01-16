function CrimeCard(props) {
  return (
    <div>
      <h4>{props.crime.title}</h4>
      <p>{props.crime.content}</p>
      <button>Comments</button>
    </div>
  )
}

export default CrimeCard
