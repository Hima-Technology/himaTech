<script>
	// @ts-nocheck

	import { Typography } from '@material-tailwind/react';

	import {
		ComputerDesktopIcon,
		DevicePhoneMobileIcon,
		LightBulbIcon,
		BriefcaseIcon
	} from '@heroicons/react/24/solid';

	import FeatureCard from '../components/feature-card';

	const FEATURES = [
		{
			icon: ComputerDesktopIcon,
			title: 'Web Development ',
			children:
				'From sleek and responsive websites to robust web applications, our web development services are tailored to help you establish a strong online presence and drive engagement.'
		},
		{
			icon: DevicePhoneMobileIcon,
			title: 'Mobile App Development',
			children:
				"Unlock the power of mobile with our custom mobile app development services. Whether you're looking to build an iOS, Android, or cross-platform app, we have the expertise to bring your vision to life."
		},
		{
			icon: BriefcaseIcon,
			title: 'Digital Marketing Solutions',
			children:
				'Elevate your online presence and reach your target audience effectively with our digital marketing services. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email campaigns, we help you attract, engage, and convert customers.'
		},
		{
			icon: LightBulbIcon,
			title: 'IT Consulting, Strategy, and Training',
			children:
				"Gain a competitive edge and empower your team with our comprehensive IT consulting, strategy, and training services. Whether you need help aligning your technology initiatives with your business goals, optimizing your IT infrastructure, or navigating digital transformation, our expert consultants provide strategic guidance and support. Additionally, our training programs are designed to equip individuals and teams with the skills and knowledge they need to succeed in today's fast-paced digital landscape, covering topics ranging from IT best practices to emerging technologies."
		}
	];
</script>

<section class="py-28 px-4">
	<div class="container mx-auto mb-20 text-center">
		<Typography
			variant="h1"
			color="blue-gray"
			class="mb-4"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			What We Do
		</Typography>
		<Typography
			variant="lead"
			class="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			At Hima Technologies, we offer a comprehensive suite of technology services designed to help
			our clients thrive in the digital age. Our core services include:
		</Typography>
	</div>
	<div class="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
		{#each FEATURES as props, idx}
			<FeatureCard {props} key={idx} />
		{/each}
	</div>
</section>
