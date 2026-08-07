/**
 * Admin Stats Updater Component
 * 
 * Temporary utility for manually updating stats.
 * Use this until you build a full admin dashboard.
 * 
 * To use: Import and add <StatsUpdater /> to any page during development
 */

import { useState } from 'react'
import { updateStatsConfig, getStatsMode } from '../../services/statsService'

export default function StatsUpdater() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')
  
  const [stats, setStats] = useState({
    completedBookings: '',
    totalProfessionals: '',
    areasServed: '',
  })

  const mode = getStatsMode()
  
  // Only show in development and if Firebase mode
  if (import.meta.env.PROD || mode !== 'firebase') {
    return null
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setIsUpdating(true)
    setMessage('')
    
    try {
      const updates = {}
      if (stats.completedBookings) updates.completedBookings = parseInt(stats.completedBookings)
      if (stats.totalProfessionals) updates.totalProfessionals = parseInt(stats.totalProfessionals)
      if (stats.areasServed) updates.areasServed = parseInt(stats.areasServed)
      
      await updateStatsConfig(updates)
      setMessage('✅ Stats updated successfully!')
      
      // Clear form
      setStats({
        completedBookings: '',
        totalProfessionals: '',
        areasServed: '',
      })
      
      // Reload page to see changes
      setTimeout(() => window.location.reload(), 1500)
      
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`)
    } finally {
      setIsUpdating(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 text-sm font-bold z-50"
        title="Admin: Update Stats"
      >
        ⚙️ Admin
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl p-6 w-96 z-50 border-2 border-purple-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Update Stats</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleUpdate} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Completed Bookings
          </label>
          <input
            type="number"
            value={stats.completedBookings}
            onChange={(e) => setStats({ ...stats, completedBookings: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., 250"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Professionals
          </label>
          <input
            type="number"
            value={stats.totalProfessionals}
            onChange={(e) => setStats({ ...stats, totalProfessionals: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., 15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Areas Served
          </label>
          <input
            type="number"
            value={stats.areasServed}
            onChange={(e) => setStats({ ...stats, areasServed: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., 25"
          />
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isUpdating ? 'Updating...' : 'Update Stats'}
        </button>

        {message && (
          <p className={`text-sm text-center ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Mode: <span className="font-semibold">{mode}</span><br />
          Note: Ratings are calculated from reviews
        </p>
      </div>
    </div>
  )
}
