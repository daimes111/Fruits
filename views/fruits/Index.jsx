const React = require('react')
const Default = require('../layouts/Default') //imports the Defaults.jsx file


class Index extends React.Component {
    render () {
        const {fruits} = this.props
        return (
            <Default title="Fruits List">
                <ul>
                    {fruits.map((fruit) => {
                        const {name, color, readyToEat} = fruit
                        return (
                            <li key={fruit._id}>
                                The{' '} <a href={`/fruits/${fruit._id}`} style={{color: `${color}`}}> {name}</a> {' '} is {color} <br></br>
                                {readyToEat? 'It is ready to eat' : 'It is not ready to eat'}
                                <form method="POST" action={`/fruits/${fruit._id}?_method=DELETE`}>
                                    <input type="submit" value={`Delete ${color} ${name}`} style={{backgroundColor: `${color}`}}/>
                                </form>
                            </li>
                        )

                    })}
                </ul>
            </Default>
        )
    }
}



module.exports = Index