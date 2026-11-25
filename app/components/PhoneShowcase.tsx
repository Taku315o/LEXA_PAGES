"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./icons";

export type PhoneMedia =
  | {
      kind: "video";
      mp4: string;
      webm: string;
      poster: string;
      alt: string;
      aspectRatio?: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    };

export function PhoneShowcase({
  media,
  size = "md",
  priority = false,
  playLabel = "Play demo video",
  pauseLabel = "Pause demo video",
}: {
  media: PhoneMedia;
  size?: "lg" | "md" | "sm";
  priority?: boolean;
  playLabel?: string;
  pauseLabel?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    if (media.kind !== "video") return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !userPaused) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else if (!entry.isIntersecting) {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [media.kind, userPaused]);

  const togglePlayback = () => {
    if (media.kind !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setUserPaused(false);
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      setUserPaused(true);
      video.pause();
      setIsPlaying(false);
    }
  };

  const widthClass =
    size === "lg"
      ? "max-w-[300px] sm:max-w-[330px] lg:max-w-[360px]"
      : size === "sm"
        ? "max-w-[240px] sm:max-w-[260px]"
        : "max-w-[270px] sm:max-w-[300px]";

  return (
    <div ref={containerRef} className={`relative mx-auto w-full ${widthClass}`}>
      <div className="relative rounded-[44px] border-[6px] border-[#1D1D1F] bg-[#1D1D1F] shadow-[0_24px_60px_rgba(0,0,0,0.16)] dark:border-[#2C2C30] dark:bg-[#111114] dark:shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
        <div
          className="relative overflow-hidden rounded-[38px] bg-black"
          style={
            media.kind === "video"
              ? { aspectRatio: media.aspectRatio ?? "1206 / 2622" }
              : undefined
          }
        >
          {media.kind === "video" ? (
            <>
              <video
                ref={videoRef}
                className="block h-full w-full cursor-pointer object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload={priority ? "auto" : "metadata"}
                poster={media.poster}
                aria-label={media.alt}
                onClick={togglePlayback}
              >
                <source src={media.webm} type="video/webm" />
                <source src={media.mp4} type="video/mp4" />
              </video>

              <button
                type="button"
                onClick={togglePlayback}
                aria-label={isPlaying ? pauseLabel : playLabel}
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                {isPlaying ? (
                  <PauseIcon className="h-3.5 w-3.5" />
                ) : (
                  <PlayIcon className="h-3.5 w-3.5" />
                )}
              </button>
            </>
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              priority={priority}
              className="block w-full select-none"
              draggable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
