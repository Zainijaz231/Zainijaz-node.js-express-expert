'use client'

import { useState } from 'react'
import { Code2, Server, Database, Globe, Copy, Check } from 'lucide-react'

const CodeExample = ({ title, description, code, language }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-sm">
          <span className="font-mono">{language}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <div className="code-block text-gray-300">
          <pre className="text-sm leading-relaxed">{code}</pre>
        </div>
      </div>
    </div>
  )
}

export default function Code() {
  const backendCode = `// Express.js API endpoint with authentication and validation
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Middleware for JWT authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// GET /api/users/profile - Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/users/profile - Update user profile
router.put('/profile', [
  authenticateToken,
  body('email').isEmail().normalizeEmail(),
  body('name').trim().isLength({ min: 2, max: 50 }),
  body('bio').optional().trim().isLength({ max: 500 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, bio } = req.body;
    
    // Check if email is already taken by another user
    const existingUser = await User.findOne({ 
      email, 
      _id: { $ne: req.user.id } 
    });
    
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { email, name, bio, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({ 
      message: 'Profile updated successfully', 
      user: updatedUser 
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;`

  const frontendCode = `// React component with hooks, state management, and API integration
import React, { useState, useEffect } from 'react';
import { User, Mail, Edit3, Save, X, AlertCircle } from 'lucide-react';

const ProfileManager = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  });

  // Fetch user profile on component mount
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      
      const response = await fetch('/api/users/profile', {
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data.user);
      setFormData({
        name: data.user.name,
        email: data.user.email,
        bio: data.user.bio || ''
      });
    } catch (err) {
      setError('Failed to load profile');
      console.error('Profile fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      
      const token = localStorage.getItem('authToken');
      
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }

      setProfile(data.user);
      setIsEditing(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        name: profile.name,
        email: profile.email,
        bio: profile.bio || ''
      });
    }
    setIsEditing(false);
    setError(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <User className="mr-2 h-6 w-6" />
          Profile Settings
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Edit3 className="mr-2 h-4 w-4" />
            Edit
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900">{profile?.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              {profile?.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          {isEditing ? (
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about yourself..."
            />
          ) : (
            <p className="text-gray-900">{profile?.bio || 'No bio provided'}</p>
          )}
        </div>

        {isEditing && (
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileManager;`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Code Examples</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world code snippets showcasing my approach to backend API development 
              and React frontend integration. These examples demonstrate clean, maintainable 
              code with proper error handling and modern best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Backend Example */}
          <div>
            <div className="flex items-center mb-6">
              <Server className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Backend API Development</h2>
            </div>
            <CodeExample
              title="User Profile API with Authentication"
              description="A complete Express.js API endpoint demonstrating JWT authentication, input validation, error handling, and database operations. This example shows how I structure backend APIs for security and maintainability."
              code={backendCode}
              language="JavaScript (Node.js/Express)"
            />
          </div>

          {/* Frontend Example */}
          <div>
            <div className="flex items-center mb-6">
              <Code2 className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">React Frontend Development</h2>
            </div>
            <CodeExample
              title="Profile Management Component"
              description="A React component that handles user profile management, including state management, API integration, form handling, and error states. Demonstrates modern React patterns with hooks and proper error handling."
              code={frontendCode}
              language="JavaScript (React)"
            />
          </div>

        </div>
      </section>

      {/* Technical Approach */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Development Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I leverage modern tools and AI assistance to write better code faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend-First Thinking</h3>
              <p className="text-gray-600">
                I design robust APIs first, ensuring scalable architecture and proper data flow 
                before building frontend interfaces.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Code Practices</h3>
              <p className="text-gray-600">
                I write self-documenting code with proper error handling, validation, 
                and consistent patterns that make maintenance easier.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Enhanced Development</h3>
              <p className="text-gray-600">
                I leverage AI tools like GitHub Copilot and ChatGPT to accelerate development 
                while maintaining code quality and best practices.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why This Approach Works</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Productivity & Quality</h4>
                <p>
                  By combining solid fundamentals with AI assistance, I can deliver 
                  high-quality code faster without sacrificing maintainability or security.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Future-Proof Solutions</h4>
                <p>
                  I focus on writing code that's not just functional today, but scalable 
                  and adaptable for future requirements and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}