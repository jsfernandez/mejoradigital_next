import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  client: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Group tags by type for better organization
  const techTags = project.tags.filter(
    (tag) => !tag.includes("Desarrollo") && !tag.includes("Integraciones") && !tag.includes("API"),
  )

  const typeTags = project.tags.filter(
    (tag) => tag.includes("Desarrollo") || tag.includes("Integraciones") || tag.includes("API"),
  )

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <div className="text-sm font-medium text-muted-foreground">Cliente: {project.client}</div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between gap-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="space-y-3">
          {typeTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {typeTags.map((tag) => (
                <Badge key={`${project.id}-${tag}`} variant="outline" className="text-xs bg-muted/50">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {techTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {techTags.map((tag) => (
                <Badge key={`${project.id}-${tag}`} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

