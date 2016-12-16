import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import * as Inferno from 'inferno'

interface IProps {
	children: any
	params: any
}

export default class Root extends Component<IProps, any> {
	constructor() {
		super()
		this.state = {}
	}
	componentWillMount() {
	}
	componentDidMount() {
	}
	componentWillReceiveProps(next: IProps) {
	}
	render() {
		const { children} = this.props
		return (
			<div className='root'>
				{children}
			</div>
		)
	}
}