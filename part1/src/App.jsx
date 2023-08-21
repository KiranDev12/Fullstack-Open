const Header = () => {
  return (
    <div>
      <h1>
        Half Stack application development
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.exercises}</p>
    </div>
  )
}
const Content = () => {
  return (
    <div>
      <Part name="Fundamentals of React" exercises={10} />
      <Part name="Using props to pass data" exercises={7} />
      <Part name="State of a component" exercises={14} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
}
const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header />
      <Content />
      <Content />
      <Content />
      <Total part1={10} part2={7} part3={14} />
    </div>
  )
}

export default App