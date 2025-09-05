# MannSakha AI - Next.js Frontend

This is the converted Next.js version of the MannSakha AI mental health chatbot frontend application.

## 🚀 Features

- **Modern Next.js 15** with TypeScript and Tailwind CSS
- **Responsive Design** that works on all devices
- **Dark/Light Theme Support** with auto system preference detection
- **Mental Health Chat Interface** with AI-powered responses
- **Focus Timer** with Pomodoro technique and ambient sounds
- **Sleep Support** with guided relaxation and calming sounds
- **Stress Relief Center** with breathing exercises and mindfulness techniques
- **User Authentication** with login/signup functionality
- **Newsletter Subscription** for mental health tips and updates

## 📁 Project Structure

```
nextjs-mansakha/
├── app/                          # App Router pages
│   ├── globals.css              # Global styles with CSS variables
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── chat/page.tsx            # Chat interface page
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   ├── focus/page.tsx           # Focus timer page
│   ├── sleep/page.tsx           # Sleep support page
│   ├── stress-relief/page.tsx   # Stress relief page
│   └── api/                     # API routes
│       ├── auth/                # Authentication endpoints
│       └── newsletter/          # Newsletter subscription
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header with theme toggle
│   ├── ChatInterface.tsx        # Chat functionality
│   ├── FocusTimer.tsx           # Pomodoro timer with music
│   ├── SleepGuide.tsx           # Sleep improvement guide
│   ├── StressRelief.tsx         # Stress relief exercises
│   ├── auth/                    # Authentication components
│   ├── providers/               # Context providers
│   └── sections/                # Homepage sections
├── public/                      # Static assets
│   └── audio/                   # Background music and sounds
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

### Color Scheme
The application uses a maroon and black color scheme with orange accents:

- **Primary Colors**: Maroon (#800020) and Black (#121212)
- **Accent Colors**: Orange (#ff914d) and Gold (#f5c542)
- **Theme Support**: Automatic dark/light mode switching

### CSS Variables
All colors and styling use CSS custom properties for easy theming:

```css
:root {
  --maroon-primary: #800020;
  --black-primary: #121212;
  --accent-primary: #ff914d;
  --accent-secondary: #f5c542;
  /* ... and more */
}
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-mansakha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- About section highlighting AI features
- Services grid with links to main features
- Features showcase
- Newsletter subscription

### Chat Page (`/chat`)
- Interactive chat interface with AI responses
- Real-time message display
- Typing indicators
- Mobile-responsive design

### Authentication Pages
- **Login** (`/login`): User sign-in with demo credentials
- **Signup** (`/signup`): New user registration

### Wellness Features
- **Focus Timer** (`/focus`): Pomodoro technique with background music
- **Sleep Support** (`/sleep`): Relaxation techniques and calming sounds
- **Stress Relief** (`/stress-relief`): Breathing exercises and coping strategies

## 🎵 Audio Features

The application includes various audio files for relaxation and focus:

- Calm music for meditation
- Coffee shop ambiance
- Lo-fi chill beats
- Nature sounds
- Piano ambient music
- Rain sounds
- White noise

Audio files are stored in `public/audio/` and can be played during timer sessions.

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Newsletter
- `POST /api/newsletter` - Newsletter subscription

## 🎯 Key Features Converted

### From HTML/CSS/JS to Next.js/TypeScript:

1. **Static HTML pages** → **Dynamic React components**
2. **Vanilla JavaScript** → **TypeScript with React hooks**
3. **CSS files** → **CSS-in-JS and CSS modules**
4. **Manual theme switching** → **Context-based theme management**
5. **Form handling** → **React form state management**
6. **Static routing** → **Next.js App Router**

### Improvements Made:

- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Component Architecture**: Modular, reusable components
- ✅ **State Management**: React hooks and context
- ✅ **Performance**: Next.js optimizations and lazy loading
- ✅ **SEO**: Server-side rendering and metadata
- ✅ **Accessibility**: Better semantic HTML and ARIA labels
- ✅ **Mobile Experience**: Improved responsive design

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🔮 Future Enhancements

- [ ] **Real AI Integration**: Connect to actual AI/ML services
- [ ] **User Profiles**: Personal dashboard and progress tracking
- [ ] **Offline Support**: PWA capabilities for offline use
- [ ] **Push Notifications**: Reminders and check-ins
- [ ] **Analytics**: User engagement and wellness metrics
- [ ] **Community Features**: Support groups and forums
- [ ] **Professional Connect**: Links to mental health professionals

## 📞 Support & Crisis Resources

The application includes crisis support information:

- **Crisis Hotline**: 988 (Suicide & Crisis Lifeline)
- **Text Support**: HOME to 741741 (Crisis Text Line)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

This frontend conversion maintains the original design and functionality while modernizing the technology stack for better performance, maintainability, and user experience.

---

**Note**: This is a mental health support application. If you or someone you know is in crisis, please reach out to local emergency services or mental health professionals immediately.
