class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}


class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <p>{this.props.reviews.name}</p>
                <div className="statbox">{this.props.reviews.count.map(number => <p>{number}</p>)}</div>
                {/* <p>Name</p>
                <p>Values</p> */}
            </div>
        )
    }