type Props = {
	field: String;
};
const Fieldset = ({ field }: Props) => {
	const id = field.trim().toLowerCase();

	return (
		<fieldset>
			<label
				className="secondary"
				htmlFor={id}
			>
				{field}
			</label>
			<input
				className="secondary"
				id={id}
			/>
		</fieldset>
	);
};

export default Fieldset;
