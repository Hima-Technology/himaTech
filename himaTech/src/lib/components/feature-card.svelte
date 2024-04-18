<script lang="ts">
	import { Typography, Card, CardBody, iconButton } from '@material-tailwind/react';

	//   interface FeatureCardProps {
	//     icon: React.ElementType;
	//     title: string;
	//     children: React.ReactNode;
	//   }

	export let title : string;
</script>

<!-- export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) { -->

<Card
	color="transparent"
	shadow={false}
	placeholder={undefined}
	onPointerEnterCapture={undefined}
	onPointerLeaveCapture={undefined}
>
	<CardBody
		className="grid justify-start"
		placeholder={undefined}
		onPointerEnterCapture={undefined}
		onPointerLeaveCapture={undefined}
	>
		<div
			className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white"
		>
			<Icon className="h-6 w-6" />
		</div>
		<Typography
			variant="h5"
			color="blue-gray"
			className="mb-2"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			{title}
		</Typography>
		<Typography
			className=" font-normal !text-gray-500"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
		</Typography>
	</CardBody>
</Card>
