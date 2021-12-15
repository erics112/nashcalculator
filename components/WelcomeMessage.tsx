const WelcomeMessage: React.FC = () => {
	return (
		<div className="rounded-md shadow bg-green-50 p-4 w-full">
			<div className="flex">
				<div className="flex-shrink-0"></div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-green-800">
						Welcome to the new Nash community calculator!
					</h3>
					<div className="mt-2 text-sm text-green-700">
						<p>
							Nash has just released their revamped
							tokenomics -- putting NEX at the center of
							their financial superapp. This is a
							calculator put together by the community for
							the community to help speculate on the
							potential returns of Nash's core services.
						</p>
					</div>
					<div className="mt-4">
						<div className="-mx-2 -my-1.5 flex">
							<a
								href="https://blog.nash.io/the-nex-token-and-the-nash-app/"
								className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
							>
								See Tokenomics
							</a>
							<a
								href="https://github.com/erics112/nashcalculator"
								className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
							>
								Contribute via GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeMessage;