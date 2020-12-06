class IngredientDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const ingredientId = this.props.match.params.ingredientId
        this.props.findIngredientNutritionById(ingredientId)
        // figure out how ingredient information is organized and make user services for it to get the data
    }
}