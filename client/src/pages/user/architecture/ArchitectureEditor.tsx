/** @format */

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Save, ZoomIn, ZoomOut, Undo2, Redo2, Grid3X3 } from "lucide-react";

const ArchitectureEditor = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-background">
			<Navbar />
			<div className="flex w-full">
				<DashboardSidebar />

				<main className="flex-1 overflow-auto flex flex-col">
					{/* Toolbar */}
					<div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10 p-4">
						<div className="container mx-auto">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<h1 className="text-2xl font-bold">Architecture Editor</h1>
									<p className="text-sm text-muted-foreground">
										Drag components to design your architecture
									</p>
								</div>
								<div className="flex gap-2">
									<Button variant="outline" size="sm">
										<Undo2 className="w-4 h-4 mr-2" />
										Undo
									</Button>
									<Button variant="outline" size="sm">
										<Redo2 className="w-4 h-4 mr-2" />
										Redo
									</Button>
									<Button variant="outline" size="sm">
										<ZoomOut className="w-4 h-4" />
									</Button>
									<Button variant="outline" size="sm">
										<ZoomIn className="w-4 h-4" />
									</Button>
									<Button variant="outline" size="sm">
										<Grid3X3 className="w-4 h-4" />
									</Button>
									<Button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
										<Save className="w-4 h-4 mr-2" />
										Save
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-1 flex">
						{/* Components Panel */}
						<div className="w-64 border-r border-border/50 bg-secondary/30 overflow-y-auto p-4 space-y-4">
							<div>
								<h3 className="text-sm font-semibold mb-3">Compute</h3>
								<div className="space-y-2">
									{["EC2 Instance", "Lambda", "ECS", "Lightsail"].map(
										(item) => (
											<div
												key={item}
												className="p-3 bg-background rounded-lg border border-border/50 cursor-move hover:border-purple-300/50 text-sm font-medium transition-all">
												{item}
											</div>
										)
									)}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-semibold mb-3">Storage</h3>
								<div className="space-y-2">
									{["S3", "EBS", "EFS", "Glacier"].map((item) => (
										<div
											key={item}
											className="p-3 bg-background rounded-lg border border-border/50 cursor-move hover:border-purple-300/50 text-sm font-medium transition-all">
											{item}
										</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-semibold mb-3">Database</h3>
								<div className="space-y-2">
									{["RDS", "DynamoDB", "ElastiCache", "Neptune"].map((item) => (
										<div
											key={item}
											className="p-3 bg-background rounded-lg border border-border/50 cursor-move hover:border-purple-300/50 text-sm font-medium transition-all">
											{item}
										</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-semibold mb-3">Networking</h3>
								<div className="space-y-2">
									{["VPC", "Load Balancer", "CloudFront", "Route 53"].map(
										(item) => (
											<div
												key={item}
												className="p-3 bg-background rounded-lg border border-border/50 cursor-move hover:border-purple-300/50 text-sm font-medium transition-all">
												{item}
											</div>
										)
									)}
								</div>
							</div>
						</div>

						{/* Canvas Area */}
						<div className="flex-1 bg-gradient-to-br from-background to-secondary/20 relative overflow-auto">
							<div className="absolute inset-0 opacity-30">
								<svg
									className="w-full h-full"
									style={{
										backgroundImage:
											"linear-gradient(0deg, transparent 24%, rgba(200, 200, 200, 0.05) 25%, rgba(200, 200, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(200, 200, 200, 0.05) 75%, rgba(200, 200, 200, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 200, 200, 0.05) 25%, rgba(200, 200, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(200, 200, 200, 0.05) 75%, rgba(200, 200, 200, 0.05) 76%, transparent 77%, transparent)",
										backgroundSize: "50px 50px",
									}}
								/>
							</div>

							<div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
								<div className="text-center">
									<Grid3X3 className="w-16 h-16 mx-auto mb-4" />
									<p className="text-lg font-medium">
										Drag components from the left panel to start designing
									</p>
									<p className="text-sm mt-2">
										Connect components to create your architecture
									</p>
								</div>
							</div>
						</div>

						{/* Properties Panel */}
						<div className="w-64 border-l border-border/50 bg-secondary/30 overflow-y-auto p-4 space-y-4">
							<div>
								<h3 className="text-sm font-semibold mb-3">Properties</h3>
								<p className="text-sm text-muted-foreground">
									Select a component to edit its properties
								</p>
							</div>

							<div>
								<label className="text-sm font-medium block mb-2">
									Component Name
								</label>
								<input
									type="text"
									placeholder="Enter name"
									className="w-full px-3 py-2 border border-border/50 rounded-lg text-sm"
									disabled
								/>
							</div>

							<div>
								<label className="text-sm font-medium block mb-2">
									Instance Type
								</label>
								<input
									type="text"
									placeholder="Select type"
									className="w-full px-3 py-2 border border-border/50 rounded-lg text-sm"
									disabled
								/>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ArchitectureEditor;
