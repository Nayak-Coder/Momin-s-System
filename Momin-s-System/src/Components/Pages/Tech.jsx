import React from "react";

const upcomingProjects = [
	{
		title: "AI Solutions",
		description:
			"We are developing advanced AI-powered analytics and automation tools to revolutionize business operations and customer experiences.",
		image: "https://via.placeholder.com/300x180?text=AI+Project",
		badge: "Coming Soon",
	},
	{
		title: "Smart Drone",
		description:
			"Our Smart Drone project will deliver intelligent aerial monitoring, delivery, and mapping services using cutting-edge technology.",
		image: "https://via.placeholder.com/300x180?text=Smart+Drone",
		badge: "In Development",
	},
];

const Tech = () => {
	return (
		<div className="font-sans text-gray-800 bg-white min-h-screen">
			<header className="bg-gray-900 text-white py-5 px-6 flex justify-between items-center">
				<h1 className="text-2xl font-bold tracking-wide">Tech Innovations</h1>
				<nav className="space-x-6 text-sm">
					<a href="/" className="hover:text-gray-400">Home</a>
					<a href="/products" className="hover:text-gray-400">Products</a>
					<a href="/tech" className="hover:text-gray-400">Tech</a>
					<a href="/contact" className="hover:text-gray-400">Contact</a>
					<a href="/cart" className="hover:text-gray-400">Cart</a>
				</nav>
			</header>

			<section className="bg-blue-50 py-20 px-6 text-center">
				<h2 className="text-4xl font-bold mb-4 text-blue-900">Upcoming Projects</h2>
				<p className="text-lg mb-8 text-blue-700">Discover our future innovations in AI and Smart Drone technology.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
					{upcomingProjects.map((project, idx) => (
						<div key={idx} className="border rounded-xl shadow-md hover:shadow-xl transition bg-white">
							<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
							<div className="p-6 text-left">
								<span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
									{project.badge}
								</span>
								<h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="bg-gray-50 py-16 px-6">
				<h3 className="text-3xl font-bold text-center mb-8">Our Commitment</h3>
				<div className="max-w-4xl mx-auto text-center text-lg text-gray-700">
					<p>
						At TechLaptop Store, we are dedicated to pushing the boundaries of technology. Our upcoming AI and Smart Drone projects are designed to deliver smarter, safer, and more efficient solutions for businesses and individuals alike.
					</p>
				</div>
			</section>
		</div>
	);
};

export default Tech;
