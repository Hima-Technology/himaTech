<script>
// @ts-nocheck

  // Import Svelte components from Material Tailwind
  import { Typography, Card } from '@material-tailwind/react'; // Update the import path if needed

  const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.",
  },
];
</script>

<section class="px-8 py-20">
  <div class="container max-w-6xl mx-auto">
    <div class="text-center">
      <Typography variant="h1" color="blue-gray" class="mb-4">
        Frequently asked questions
      </Typography>
      <Typography variant="lead" class="mx-auto mb-24 !text-gray-500 lg:w-3/5">
        A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do
      </Typography>
    </div>

    <div class="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
      {#each FAQS as { title, desc }}
        <Card key={title} shadow={false} color="transparent">
          <Typography color="blue-gray" class="pb-6" variant="h4">
            {title}
          </Typography>
          <div class="pt-2">
            <Typography class="font-normal !text-gray-500">
              {desc}
            </Typography>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
