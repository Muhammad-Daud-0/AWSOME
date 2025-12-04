/** @format */

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Plus, Search, Eye, Edit, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ArchitectureList = () => {
	const [architectures, setArchitectures] = useState([
		{
			id: 1,
			name: "E-Commerce Platform",
			description: "High-availability e-commerce infrastructure",
			lastModified: "2024-12-03",
			components: 12,
			status: "Production",
		},
		{
			id: 2,
			name: "Mobile App Backend",
			description: "Serverless backend for mobile applications",
			lastModified: "2024-12-02",
			components: 8,
			status: "Development",
		},
		{
			id: 3,
			name: "Data Analytics Pipeline",
			description: "Real-time data processing pipeline",
			lastModified: "2024-11-28",
			components: 15,
			status: "Production",
		},
		{
			id: 4,
			name: "SaaS Platform",
			description: "Multi-tenant SaaS application",
			lastModified: "2024-11-25",
			components: 20,
			status: "Staging",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");

	const filteredArchitectures = architectures.filter((arch) =>
		arch.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleDelete = (id: number) => {
		setArchitectures(architectures.filter((arch) => arch.id !== id));
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Production":
				return "bg-green-100 text-green-700";
			case "Staging":
				return "bg-blue-100 text-blue-700";
			case "Development":
				return "bg-yellow-100 text-yellow-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-background">
			<Navbar />
			<div className="flex w-full">
				<DashboardSidebar />

				<main className="flex-1 overflow-auto">
					<div className="container mx-auto p-8 space-y-8">
						{/* Header */}
						<div className="flex items-center justify-between">
							<div className="space-y-2">
								<h1 className="text-4xl font-bold">Your Architectures</h1>
								<p className="text-lg text-muted-foreground">
									Manage and view all your AWS architectures
								</p>
							</div>
							<Button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
								<Plus className="w-4 h-4 mr-2" />
								New Architecture
							</Button>
						</div>

						{/* Search Bar */}
						<div className="relative">
							<Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
							<Input
								placeholder="Search architectures..."
								className="pl-12"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>

						{/* Architectures Grid */}
						<div className="grid md:grid-cols-2 gap-6">
							{filteredArchitectures.map((arch) => (
								<div
									key={arch.id}
									className="glass-card rounded-xl p-6 border border-border/50 hover:border-purple-300/50 transition-all">
									<div className="flex items-start justify-between mb-4">
										<div className="flex-1">
											<h3 className="text-lg font-semibold text-gray-900">
												{arch.name}
											</h3>
											<p className="text-sm text-muted-foreground mt-1">
												{arch.description}
											</p>
										</div>
										<span
											className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
												arch.status
											)}`}>
											{arch.status}
										</span>
									</div>

									<div className="grid grid-cols-3 gap-2 py-4 px-4 bg-secondary/30 rounded-lg mb-4 text-sm">
										<div>
											<p className="text-muted-foreground">Components</p>
											<p className="font-semibold text-gray-900">
												{arch.components}
											</p>
										</div>
										<div>
											<p className="text-muted-foreground">Modified</p>
											<p className="font-semibold text-gray-900">
												{arch.lastModified}
											</p>
										</div>
										<div>
											<p className="text-muted-foreground">Size</p>
											<p className="font-semibold text-gray-900">
												{arch.components * 2.5}KB
											</p>
										</div>
									</div>

									<div className="flex gap-2">
										<Button
											variant="outline"
											className="flex-1"
											onClick={() => console.log("View:", arch.id)}>
											<Eye className="w-4 h-4 mr-2" />
											View
										</Button>
										<Button
											variant="outline"
											className="flex-1"
											onClick={() => console.log("Edit:", arch.id)}>
											<Edit className="w-4 h-4 mr-2" />
											Edit
										</Button>
										<Button
											variant="outline"
											className="px-4"
											onClick={() => console.log("Download:", arch.id)}>
											<Download className="w-4 h-4" />
										</Button>
										<Button
											variant="outline"
											className="px-4"
											onClick={() => handleDelete(arch.id)}>
											<Trash2 className="w-4 h-4 text-red-500" />
										</Button>
									</div>
								</div>
							))}
						</div>

						{filteredArchitectures.length === 0 && (
							<div className="glass-card rounded-xl p-12 border border-border/50 text-center">
								<p className="text-muted-foreground">No architectures found</p>
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	);
};

export default ArchitectureList;
