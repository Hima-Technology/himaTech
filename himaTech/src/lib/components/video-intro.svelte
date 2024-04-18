<script>
// @ts-nocheck
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";

</script>
    <div class="p-8">
      <div class="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl ">
        <div class="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <Image
          width={768}
          height={400}
          src="/image/Background.png"
          class="w-full object-cover scale-110 rounded-xl h-full"
          alt=""
        />
        <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
          <IconButton
            color="white"
            class="rounded-full"
            size="lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <PlayIcon class="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </div>

export default VideoIntro;
