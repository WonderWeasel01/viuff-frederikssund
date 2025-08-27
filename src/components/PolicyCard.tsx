import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PolicyCardProps {
  id?: string;
  title: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  icon: ReactNode;
  isReversed?: boolean;
  readMore: string;
  isOpen: boolean;
  onToggle: () => void;
}

const PolicyCard = ({
  id,
  title,
  description,
  content,
  image,
  imageAlt,
  icon,
  isReversed = false,
  readMore,
  isOpen,
  onToggle
}: PolicyCardProps) => {
  return (
    <div id={id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <Card className="border-none shadow-elegant bg-gradient-section">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                {icon}
              </div>
              <div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-primary">
                  {title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-1">
                  {description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-6">
              {content}
            </p>
            <Button
              variant="conservative"
              size="lg"
              className="whitespace-normal break-words max-w-xs text-ellipsis overflow-hidden line-clamp-2"
              onClick={onToggle}
            >
              {isOpen ? "Luk" : `Læs mere om ${title.toLowerCase()}`}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Image */}
      <div className={isReversed ? 'lg:col-start-1' : ''}>
        <div className="relative">
          <img 
            src={image}
            alt={imageAlt}
            className="w-full h-80 lg:h-80 object-cover object-top rounded-2xl shadow-elegant"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;