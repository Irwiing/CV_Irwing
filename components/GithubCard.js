function GitHubCard(props) {
	return (
		<>
			<div className="bg-gray-100 rounded-2xl p-3 m-3">
				<div className="border-2 rounded-2xl border-gray-200 max-w-xs min-h-full md:min-w-max p-4">
					<p className="text-lg flex justify-center border-b-2 font-serif md:text-xl">{props.repo.repo}</p>
					<p className="text-sm py-2 font-serif">{props.repo.language}</p>
					<p className="pt-2">{props.repo.description ? props.repo.description : "Este repositorio não tem descrição"}</p>
				</div>
			</div>
		</>
	)
}

export default GitHubCard