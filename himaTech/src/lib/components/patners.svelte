<script lang="ts">
	import { Card, CardBody, Avatar, IconButton, Typography } from '@material-tailwind/react';

	interface TeamCardPropsType {
		img: string;
		name: string;
		title: string;
	}

	function TeamCard({ img, name, title }: TeamCardPropsType) {
		return (
			<Card
				class="rounded-lg bg-[#FAFAFA]"
				shadow={false}
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<CardBody
					class="text-center"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<Avatar
						src={img}
						alt={name}
						variant="circular"
						size="xxl"
						class="mx-auto mb-6 object-top"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					/>
					<Typography
						variant="h5"
						color="blue-gray"
						class="!font-medium text-lg"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{name}
					</Typography>
					<Typography
						color="blue-gray"
						class="mb-2 !text-base !font-semibold text-gray-600"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{title}
					</Typography>
					<div class="flex items-center justify-center gap-1.5">
						<IconButton
							variant="text"
							color="gray"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<i class="fa-brands fa-twitter text-lg" />
						</IconButton>
						<IconButton
							variant="text"
							color="gray"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<i class="fa-brands fa-linkedin text-lg" />
						</IconButton>
						<IconButton
							variant="text"
							color="gray"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<i class="fa-brands fa-dribbble text-lg" />
						</IconButton>
					</div>
				</CardBody>
			</Card>
		);
	}
	const members = [
		{
			img: `/image/avatar1.jpg`,
			name: 'Ahmad Sadri Abdullah',
			title: 'Co-Founder'
		},
		{
			img: `/image/avatar1.jpg`,
			name: 'Usama Talib Juma',
			title: 'Co-Founder'
		}
	];
</script>

<section class="min-h-screen py-8 px-8 lg:py-28">
	<div class="container mx-auto">
		<div class="mb-16 text-center lg:mb-28">
			<Typography
				variant="h6"
				color="blue-gray"
				class="text-lg"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				Meet the Team
			</Typography>
			<Typography
				variant="h1"
				color="blue-gray"
				class="my-2 !text-2xl lg:!text-4xl"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				Behind the Success: Our Dedicated Team
			</Typography>
			<Typography
				variant="lead"
				class="mx-auto w-full !text-gray-500 max-w-4xl"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				From visionary leadership to creative talent, and technical wizards, each team member plays
				a pivotal role in delivering the exceptional service and innovative solutions.
			</Typography>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
			{#each members as props, key}
				<TeamCard {props} {key} />
			{/each}
		</div>
	</div>
</section>
