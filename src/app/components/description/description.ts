import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal
} from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  templateUrl: './description.html',
  styleUrls: ['./description.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {
  private readonly name = 'Francisco Mauri';
  private readonly role = 'Backend Developer';
  private readonly age = new Date().getFullYear() - 1999;
  private readonly experienceYears = new Date().getFullYear() - 2022;
  private readonly location = 'Cordoba, Argentina';
  private readonly typingDelayMs = 0;
  private readonly fullText = `
    cat Developer.cs
public class Developer() : IHuman<AfterAll>
{
    public string Name { get; set; } = "${this.name}";
    public string Role { get; set; } = "${this.role}";
    public Int Age { get; set; } = ${this.age};
    public string Location { get; set; } = "${this.location}";
    
    public Experience BackendDevelopment()
    {
        Has experience in designing and implementing scalable backend systems, RESTful APIs, and microservices architecture.
        With ${this.experienceYears} years of experience in backend development, principal focus on building robust and 
        efficient backend solutions mostly in .NET environment.

        List<string> Technologies = new List<string>()
        {
            ".NET 6/7/8/9/10",
            "C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "PostgreSQL",
            "Java",
            "C/C++",
            "Haskell (Functional Programming)",
            "Python",
            "Node.js",
            "Electron.js",
        };
    }

    public Experience FrontendDevelopment()
    {
        Has ${this.experienceYears} years of experience in building responsive and user-friendly frontend applications using modern JavaScript 
        frameworks and libraries, with a focus on Angular.

        List<string> Technologies = new List<string>()
        {
            "Angular",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Sass",
            "Bootstrap",
            "Tailwind CSS",
            "React (Basic Knowledge)",
            "Node.js",
        };
    }

    public GreatCode Code()
    {
        Writes code that is clean, efficient, and maintainable.
    }

    public Knowledge Learn()
    {
        Continuously learns new technologies and programming languages to stay up-to-date with industry trends.
    }

    public Communication Collaborate()
    {
        Works effectively with other developers to achieve common goals.
    }

    public Solution ProblemSolve()
    {
        Effectively identifies and resolves complex technical issues.
    }
};
`;

  readonly typedText = signal('');

  constructor() {
    const destroyRef = inject(DestroyRef);
    const normalizedText = this.fullText.trim();
    let index = 0;

    const intervalId = window.setInterval(() => {
      if (index >= normalizedText.length) {
        window.clearInterval(intervalId);
        return;
      }

      index += 1;
      this.typedText.set(normalizedText.slice(0, index));
    }, this.typingDelayMs);

    destroyRef.onDestroy(() => window.clearInterval(intervalId));
  }
}
