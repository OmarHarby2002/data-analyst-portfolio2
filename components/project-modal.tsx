"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    fullDescription: string
    image: string
    tags: string[]
    link?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">{project.title}</DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Project Image */}
            <div
              className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary/50 transition-colors group"
              onClick={() => setIsImageOpen(true)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain bg-muted group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-lg text-sm">
                  Click to view full size
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-border text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* External Link */}
            {project.link && (
              <div>
                <Button asChild className="w-full sm:w-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Project
                  </a>
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute right-4 top-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
